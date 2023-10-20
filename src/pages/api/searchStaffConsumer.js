export default function handler(req, res) {
    const { name: nameParams } = req.query
    const data = [
        {
            id: 34847360006,
            name: '张三',
            phone: '15312345677',
            lastTime: 20220101,
            sex: 0,
            birthday: '2022-01-01',
            age: '20',
            createTime: '2022-01-01',
            vip: 'vip-1',
            serviceCount: 5,
            balance: 100,
            storeName: '北京朝阳公园店',
            storePhone: '15312345677',
            storeAddress: '东北大街1号'
        }
    ]
    const results = data.filter(({ name }) => (name === nameParams))
    console.log('results', nameParams, results)
    res.status(200).json({
        results,
        total: 200
    })
}