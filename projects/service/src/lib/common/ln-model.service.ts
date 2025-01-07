export class LnModalService {
  private modals: any[] = [];

  public add(modal: any) {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  public remove(id: string) {
    // remove modal from array of active modals
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  public open(id: string) {
    // open modal specified by id
    const modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.open();
  }

  public close(id: string) {
    // close modal specified by id
    const modal: any = this.modals.filter((x) => x.id === id)[0];
    modal.close();
  }
}
