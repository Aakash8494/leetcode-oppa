
// function twoSum(nums: number[], target: number): number[] {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
//     return [-1, -1];
// };

function twoSum(nums: number[], target: number): number[] {
    let obj: Record<string, number> = {}

    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] >= 0) {
            return [i, obj[target - nums[i]]]
        } else {
            obj[nums[i]] = i
        }
    }

    return [-1, -1];
};

console.log('twoSum() : ', twoSum([1, 2, 3, 4, 5], 3));