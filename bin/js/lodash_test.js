"use strict";
class LodashTest {
    call() {
        this.testArray();
    }
    testArray() {
        let arr = [11, 22, 33, 44, 55];
        arr = lodash.chunk(arr, 2, null);
        log.i(arr); // 按大小 分割数组为多个小数组  [[11,22],[33,44],[55]]
        // 清除数组中的假值  
        // false, null, 0, "", undefined, 和 NaN 
        arr = lodash.compact([0, 1, false, 2, '', 3]);
        log.i(arr); // [1, 2, 3]
    }
}
//# sourceMappingURL=lodash_test.js.map