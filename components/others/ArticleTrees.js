import styles from '../../styles/articleTrees.module.scss';
import { Tree } from 'antd';
import { isEmpty } from 'zgl-utils-js';
import React, { useState } from 'react';
import httpAgent from '../../httpAgent';
import { useRouter } from 'next/router'


const { DirectoryTree } = Tree;

export default function ArticleTrees ({com_class_list, user_ip}) {

    const  com_classList = !isEmpty(com_class_list) && com_class_list.map(item => {
         if (item.isLeaf) {
             return {
                 title: item.name,
                 key: item.value
             }
         } else {
             return {
                 title: item.name,
                 key: item.value,
                 children: getItemChild(item.children)
             }
         }
    })
    const [treeData, setTreeData] = useState(com_classList)
    const router = useRouter()

    function getItemChild(item) {
        return item.map(child => {
            if (child.isLeaf) {
                return {
                    title: child.name,
                    key: child.value
                }
            } else {
                return {
                    title: child.name,
                    key: child.value,
                    children: getItemChild(child.children)
                }
            }
        })
    }
    function updateTreeData (list, key, children) {
        return list.map((node) => {
          if (node.key === key) {
            return { ...node, children };
          } else if (node.children) {
            return { ...node, children: updateTreeData(node.children, key, children) };
          }
      
          return node;
        });
    }
    function onSelect(keys, event) {
        if (keys) {
            router.push('/infos/' + keys[0])
        }
    };
    
    function onExpand() {
    };
    function onLoadData({ key, children }) {
        return new Promise((resolve) => {
            if (children) {
                resolve();
                return;
            }
            const params = {
                articleId: key, // 文章id
                ip: user_ip
            }
            httpAgent({url: '/article/getArticleList', method: 'post' , params}).then(res => {
                if (res.code == 0) {
                    setTreeData((origin) =>
                        updateTreeData(origin, key, res.data.list.map(item => ({
                            title: item.title,
                            key: item.id,
                            isLeaf: true
                        })))
                    );
                    resolve();
                }
            })
        });
    }

     
    return (
        <div className={styles.trees}>
            <div className={styles.visitorTitle}> 
                分类列表 
            </div>
            <DirectoryTree
                multiple
                loadData={onLoadData}
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            />
        </div>
    )
}
