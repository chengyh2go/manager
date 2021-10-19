const  menulist = [
    {
        title:'首页',
        key: '/admin/home'
    },
    {
        title: 'UI',
        key: '/admin/ui',
        children: [
            {
                title:'按钮',
                key:'/admin/ui/buttons'
            },
            {
                title:'弹框',
                key:'/admin/ui/modals'
            }
        ]
    }
]

export default menulist