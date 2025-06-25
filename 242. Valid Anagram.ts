function isAnagram1(s: string, t: string): boolean {
    s.split("").sort().join("");
    t.split("").sort().join("");
    return s === t;
};

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let obj1: Record<string, number> = {}
    let obj2: Record<string, number> = {}

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};

console.log('isAnagram("test","ese"): ', isAnagram("test", "ese"));
console.log('isAnagram("anagram","nagaram"): ', isAnagram("anagram", "nagaram"));