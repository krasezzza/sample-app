export default class BaseRepository {

  protected model: any;

  async findAll() {
    return this.model.findAll();
  }
}
