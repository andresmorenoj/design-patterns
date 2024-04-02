interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy{
  login(user: string, password: string): boolean {
    console.log("Nos dirigimos a la base de datos");

    if (user === "admin" && password === "entra") return true;
    return false;
  }
}

class LoginServiceStrategy implements Strategy{
  login(user: string, password: string): boolean {
    console.log("Call Service");

    if (user === "admin" && password === "entra") return true;
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login("admin", "entra"));

auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login("admin", "entra"));
