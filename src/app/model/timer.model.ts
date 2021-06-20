export class Timer {

  private second = 0;

  public tick(delta: number) {
    this.second += delta;
  }

  public display(): string {
    const hour = Math.floor(this.second / 3600);
    let remain = this.second % 3600;
    const min = Math.floor(remain / 60);
    remain = remain % 60;

    if (hour === 0) {
      return `${min} : ${remain}`;
    } else {
      return `${hour} : ${min} : ${remain}`;
    }
  }
}
