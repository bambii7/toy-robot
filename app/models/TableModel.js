
class TableModel {
    static table = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    static tableFactory() {
        return JSON.parse(JSON.stringify(TableModel.table));
    }
}

export default TableModel;
