/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'
import log from 'doc/utils/log'
import locate from 'doc/locate'

import cn from 'doc/pages/components/Checkbox/cn.md'
import en from 'doc/pages/components/Checkbox/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Checkbox/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-1-base.js'),
  },
  {
    title: locate('状态 \n checked 有三个值，选中、未选中、半选', 'Checked'),
    component: require('doc/pages/components/Checkbox/example-2-checked.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-2-checked.js'),
  },
  {
    title: locate('选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue，未选中返回 undefined。', 'Value'),
    component: require('doc/pages/components/Checkbox/example-3-value.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-3-value.js'),
  },
  {
    title: locate('一组多选框', 'Group'),
    component: require('doc/pages/components/Checkbox/example-4-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-4-group.js'),
  },
  {
    title: locate('禁用', 'Disabled'),
    component: require('doc/pages/components/Checkbox/example-5-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Checkbox/example-5-disabled.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
