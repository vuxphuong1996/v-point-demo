import Base from './base.service';

class GetData extends Base {
  constructor() {
    super('/question-answers');
  }

  getAPI() {
    this.path = 'https://jsonplaceholder.typicode.com/posts';
    console.log(this.path);
    return this.get();
  }

}

const answer = new GetData();
export default answer;
