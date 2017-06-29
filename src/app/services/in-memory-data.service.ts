import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{

    createDb() {
    let users = [
      {id: 1, name: 'Nguyen Dinh Linh', team: 'Team 1', ismaster: true},
      {id: 2, name: 'Huynh Tan Tien', team: 'Team 1', ismaster: false},
      {id: 3, name: 'Nguyen Tan An', team: 'Team 1', ismaster: false},
      {id: 4, name: 'Pham Van Tuan', team: 'Team 1', ismaster: false},
      {id: 5, name: 'Tran Quoc Tuan', team: 'Team 2', ismaster: true},
      {id: 6, name: 'Do Ngoc Dan', team: 'Team 2', ismaster: false},
      {id: 7, name: 'Vo Dang Quang', team: 'Team 2', ismaster: false},
      {id: 8, name: 'Nguyen Thanh Nho', team: 'Team 3', ismaster: false},
      {id: 9, name: 'Nguyen Quoc Hung', team: 'Team 3', ismaster: true},
      {id: 10, name: 'Dang Ba Khac Trieu', team: 'Team 3', ismaster: false}
    ];
    return {users};
  }

}