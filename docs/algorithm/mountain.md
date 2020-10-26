# 845. 数组中的最长山脉
难度：`中等`
## 题目
我们把数组 `A` 中符合下列属性的任意连续子数组 `B` 称为 “山脉”：

    B.length >= 3
    存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]

（注意：`B` 可以是 `A` 的任意子数组，包括整个数组 `A`。）

给出一个整数数组 `A`，返回最长 “山脉” 的长度。

如果不含有 “山脉” 则返回 `0`。

 

示例 `1`：

输入：`[2,1,4,7,3,2,5]`
输出：`5`
解释：最长的 “山脉” 是 `[1,4,7,3,2]`，长度为 `5`。

示例 2：

输入：`[2,2,2]`
输出：`0`
解释：不含 “山脉”。

 

提示：

    0 <= A.length <= 10000
    0 <= A[i] <= 10000

## 题解
``` js
var longestMountain = function(A) {
    function getMountainArr(arr){
        let mountainArr = [];
        for(let [index,item] of arr.entries()){
            if(index===0){
                mountainArr[index] = 0;
            }else{
                if(arr[index-1]<item){
                    mountainArr[index] = mountainArr[index-1]+1;
                }else{
                    mountainArr[index] = 0;
                }
            }
         }
         return mountainArr;
    }
    //生成顶点左边最大可延伸长度
    let left = getMountainArr(A);
    //生成顶点右边最大可延伸长度
    let right =  getMountainArr(A.slice().reverse()).reverse();
    let max = 0;
    for(let [index,item] of A.entries()){
        if(index===0) continue;
        if(index===A.length-1) continue;
        //出现顶点，挑战最大值（顶点最大山脉长度：左边最大可延伸+右边最大可延伸+自己）
        if(item>A[index-1]&&item>A[index+1]){
           max = Math.max(left[index]+right[index]+1,max);
        }
    }   
    return max;
};
``` 