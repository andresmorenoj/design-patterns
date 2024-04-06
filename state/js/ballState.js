class BallState {
  constructor(context, canvas, ballSize) {
    this.context = context;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ballSize = ballSize;
    this.positionX = 0;
    this.positionY = 0;

    this.state = new MoveRightState();
  }

  setState(state) {
    this.state = state;
  }

  print() {
    this.state.print(this);
  }
}

class MoveRightState {
  print(ball) {
    ball.context.clearRect(0, 0, ball.width, ball.height);

    ball.context.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

		if(ball.positionX < ball.width - ball.ballSize) {
			ball.positionX += ball.ballSize
		} else {
			ball.setState(new MoveDownState())
		}
  }
}

class MoveDownState {
	print(ball) {
    ball.context.clearRect(0, 0, ball.width, ball.height);

    ball.context.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

		if(ball.positionY < ball.width - ball.ballSize) {
			ball.positionY += ball.ballSize
		} else {
			ball.setState(new MoveLeftState())
		}
  }
}

class MoveLeftState {
	print(ball) {
    ball.context.clearRect(0, 0, ball.width, ball.height);

    ball.context.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

		if(ball.positionX > 0) {
			ball.positionX -= ball.ballSize
		} else {
			ball.setState(new MoveUpState())
		}
  }
}

class MoveUpState {
	print(ball) {
    ball.context.clearRect(0, 0, ball.width, ball.height);

    ball.context.fillRect(
      ball.positionX,
      ball.positionY,
      ball.ballSize,
      ball.ballSize
    );

		if(ball.positionY > 0) {
			ball.positionY -= ball.ballSize
		} else {
			ball.setState(new MoveRightState())
		}
  }
}

const context = canvas.getContext("2d");
context.fillStyle = "black";

const newBall = new BallState(context, canvas, 40);
setInterval(() => newBall.print(), 100)
console.log(newBall.print());
