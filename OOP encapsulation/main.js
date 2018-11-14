var student;
student = {
    marks: {
        math: 60,
        physics: 70,
        bio: 80,
    },
    total: function () {
        return student.marks.math + student.marks.physics + student.marks.bio;
    },
    percentage: function () {
        return (student.total() / 300) * 100
    },
    passorfail: function () {
        if (student.total < 150) {
            console.log('fail');
        }
        else {
            console.log('pass')
        }
    }
}
// calling using fucntion
function studentPortfolio(n, p, m, b) {
    var student = {};
    student.name = n;
    student.marks = {};
        student.marks.physics = p;
        student.marks.bio = b;
        student.marks.math = m;
    student.total = function() {
        return student.marks.math + student.marks.physics + student.marks.bio;
    };
    student.perCent = function() {
        return (student.total() / 300) * 100
    };
    student.passOrFail = function() {
        if (student.total < 150) {
            console.log('fail');
        }
        else {
            console.log('pass')
        }
    }
}
    student1 = studentPortfolio(hari,80,99,99);

    // using prototype and storing in local storage
    function studentPortfolio(n,p,m,b) {
        let student = Object.create(studentScore);
        student.name = n;
        student.marks = {}
        student.marks.physics = p;
        student.marks.math = m;
        student.marks.bio = b;
        return student;
    }
let studentScore = {
    total : function() {
        return this.marks.math + this.marks.physics + this.marks.bio; 
    },
    perCent : function() {
        return (this.total() / 3)
    },
    passOrFail : function() {
        let physics = (this.marks.physics < 50) ? 'physics fail' : 'physics pass';
        let math = (this.marks.math < 50) ? 'math fail' : 'math pass';
        let bio = (this.marks.bio < 50) ? 'bio fail' : 'bio pass';
        let total = (this.total() < 150) ? 'failed' : 'pass';
        console.log(physics,math,bio,total);
}
}

function store(variable,keys) {
    localStorage.setItem(keys,JSON.stringify(variable));
}

student1 = studentPortfolio('pop',100,100,10);


// ***********************************