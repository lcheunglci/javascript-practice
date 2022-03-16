const id = Symbol();

const courseInfo = {
    title: 'Javascript',
    topics: ['strings','arrays','objects'],
    id: 'js-course'
}

// use for avoiding name conflicts
courseInfo[id] = 41284
console.log(courseInfo);
