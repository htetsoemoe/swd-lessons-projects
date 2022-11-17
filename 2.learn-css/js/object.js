const ttInfo = {
    name: 'Thaw Thaw',
    age: 25,
    marks : [
        {
            id: 1,
            subject: 'Myanmar',
            mark: 62
        },
        {
            id: 1,
            subject: 'English',
            mark: 70
        },
        {
            id: 1,
            subject: 'Maths',
            mark: 86
        },
        {
            id: 1,
            subject: 'Chemistry',
            mark: 90
        },
        {
            id: 1,
            subject: 'Physics',
            mark: 88
        },
        {
            id: 1,
            subject: 'Bio',
            mark: 87
        }
    ]
}

// console.log(ttInfo);
// console.log(ttInfo.marks[0].mark);

ttInfo.total = 0;
ttInfo.results = {};

for(let i = 0; i < ttInfo.marks.length; i++ ) {
    console.log(ttInfo.marks[i].mark);
    ttInfo.total += ttInfo.marks[i].mark;

    ttInfo.results[ttInfo.marks[i].subject] = ttInfo.marks[i].mark >= 40 ? 'Pass' : 'Fail';
}

// console.log(ttInfo.total);


for(info in ttInfo) {
    console.log(info, ttInfo[info]);
}