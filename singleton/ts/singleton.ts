class SingletonTs {
  private static instance: SingletonTs;
  public random: number;

  private constructor() {
		this.random = Math.random();
	}

	public static getInstace(): SingletonTs {
		if(!this.instance) {
			this.instance = new SingletonTs();
		}

		return this.instance;
	}
}

const singletonTs = SingletonTs.getInstace();
const singletonTs2 = SingletonTs.getInstace();
console.log(singletonTs);
console.log(singletonTs2);
