const res = []
function flat(data){
    data.flatMap(d => {
        const number = d.number
        for (const num1 in number) {
            res.push({
                "issue": d.issue,
                num: number[num1]
            })
        }
    })
}

const data =   {"data": [
    {
        "issue": "23056",
        "number": {
            "front-area-1": "13",
            "front-area-2": "22",
            "front-area-3": "24",
            "front-area-4": "33",
            "front-area-5": "34",
            "back-area-1": "01",
            "back-area-2": "02"
        },
    },
        {
            "issue": "23056",
            "number": {
                "front-area-1": "13",
                "front-area-2": "22",
                "front-area-3": "24",
                "front-area-4": "33",
                "front-area-5": "34",
                "back-area-1": "01",
                "back-area-2": "02"
            },
        }
    ]
}

flat(data.data)
console.log(res)