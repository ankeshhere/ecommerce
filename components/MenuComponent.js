import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    {
        type: 'divider',
    },
    getItem('CLOTHING', 'sub1', null, [
        getItem('Indian', '1'),
        getItem('Western', '2'),
        getItem('Customised', '3'),
    ]),
    {
        type: 'divider',
    },
    getItem('WEDDING ESSENTIALS', 'sub2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
    ]),
    {
        type: 'divider',
    },
    getItem('ACCESSORIES', 'sub4', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    {
        type: 'divider',
    },
];
export default function MenuComponent() {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <Menu
        
            onClick={onClick}
            style={{ backgroundColor: 'transparent', fontSize: 12 }}
            //   defaultSelectedKeys={['1']}
            //   defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};
