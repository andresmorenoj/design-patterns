interface IState {
  nextTicket: (ticket: TicketContext) => number | null;
  addTicket: (ticket: TicketContext, quantity: number) => void;
}

class TicketContext {
  private state: IState;
  public quantity: number;
  readonly ticketLimit: number;
  private ticketIndex: number;

  constructor(ticketLimit: number) {
    this.ticketLimit = ticketLimit;
    this.quantity = 0;
    this.ticketIndex = 0;

    this.state = new EmptyState();
  }

  get getTicketPosition(): number {
    return this.ticketIndex++;
  }

  set setState(state: IState) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  nextTicket(): number | null {
    return this.state.nextTicket(this);
  }

  addTicket(quantity: number): void {
    this.state.addTicket(this, quantity);
  }
}

class EmptyState implements IState {
  nextTicket(ticket: TicketContext) {
    return null;
  }

  addTicket(ticket: TicketContext, quantity: number) {
    if (quantity < ticket.ticketLimit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.ticketLimit) {
      ticket.quantity = quantity;
      ticket.setState = new FullState();
    }
  }
}

class WithDataState implements IState {
  nextTicket(ticket: TicketContext) {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }

    return ticket.getTicketPosition;
  }

  addTicket(ticket: TicketContext, quantity: number) {
    if (quantity + ticket.quantity < ticket.ticketLimit) {
      ticket.quantity += quantity;
    } else if (quantity + ticket.quantity === ticket.ticketLimit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

class FullState implements IState {
  nextTicket(ticket: TicketContext) {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }

    return ticket.getTicketPosition;
  }

  addTicket(ticket: TicketContext, quantity: number) {
    console.log("Ticket lleno");
  }
}

// Ejecución
const ticket = new TicketContext(5);
console.log(ticket.getState);
console.log(ticket.nextTicket());
ticket.addTicket(6);
console.log(ticket.getState);
console.log(ticket.nextTicket());
ticket.addTicket(4); 
console.log(ticket.getState);
console.log(ticket.nextTicket());
console.log(ticket.nextTicket());
ticket.addTicket(3);
console.log(ticket.getState);
ticket.addTicket(1);
console.log(ticket.getState);