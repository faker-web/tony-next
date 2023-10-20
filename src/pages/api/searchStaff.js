export default function handler(req, res) {
    const { name: nameParams } = req.query
    const data = [
        {
            id: 34847360006,
            name: '张三',
            title: '店长',
            serviceNum: 10,
            entryTime: '20220101',
            cardNum: 10,
            cardRate: '20%',
            complainedNum: 200,
            role: '只读'
        },
        {
            id: 34847360006,
            name: '李四',
            title: '店长',
            serviceNum: 10,
            entryTime: '20220101',
            cardNum: 10,
            cardRate: '20%',
            complainedNum: 200,
            role: '只读'
        },
    ]
    const results = data.filter(({ name }) => (name === nameParams))
    console.log('results', nameParams, results)
    res.status(200).json({
        results,
        total: 200
    })
}