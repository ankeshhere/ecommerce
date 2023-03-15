import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { useRef } from 'react';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
export default function MenuComponent({ collNav ,onClose}) {
    // const r = useRef()
    const router = useRouter();
    function pushcollection(category) {
        var arr = [];

        collNav.length > 0 && collNav.map((i, idnex) => {
            if (i.fields.categoryName.fields.categoryName == category) {
                arr.push(getItem(i.fields.collectionName, i.fields.slug))
            }
        })
        return arr
    }
    const items = [
        {
            type: 'divider',
        },
        getItem('CLOTHING', 'sub1', null, pushcollection('CLOTHING')),
        {
            type: 'divider',
        },
        getItem('WEDDING ESSENTIALS', 'sub2', null, pushcollection('WEDDING ESSENTIALS')),
        {
            type: 'divider',
        },
        getItem('ACCESSORIES', 'sub4', null, pushcollection('ACCESSORIES')),
        {
            type: 'divider',
        },
    ];
    const onClick = (e) => {
        // console.log('click ', e);
        router.push(`/collections/${e.key}`)
        onClose()

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
