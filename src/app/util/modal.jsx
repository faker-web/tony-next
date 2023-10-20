import Input from '@/components/Input'
import { SexSelect } from '@/components/Select'
import DatePickerSelf from '@/components/DatePickerSelf'
import SelectSelf from '@/components/SelectSelf'
import TableTabs from '@/components/TableTabs'

export const staff = [{
  name: "phone",
  placeholder: "请输入手机号",
  label: '手机号：',
  required: true,
  Component: Input,
}, {
  name: "name",
  label: '员工姓名：',
  placeholder: "输入员工姓名",
  required: true,
  Component: Input,
},
{
  name: "sex",
  Component: SexSelect,
},
{
  name: "leavel",
  placeholder: "请选择",
  label: '员工职级：',
  required: true,
  Component: SelectSelf,
}, {
  name: "time",
  placeholder: "请选择：",
  label: '入职时间：',
  required: true,
  Component: DatePickerSelf
}]

export const consumer = [{
  name: "phone",
  placeholder: "请输入手机号",
  label: '手机号：',
  required: true,
  Component: Input,
}, {
  name: "name",
  label: '客户姓名：',
  placeholder: "请输入客户姓名",
  required: true,
  Component: Input,
},
{
  name: "sex",
  Component: SexSelect,
},
{
  name: "birthday",
  placeholder: "输选择客户生日",
  label: '客户生日：',
  required: true,
  Component: DatePickerSelf,
}, {
  name: "staffName",
  placeholder: "输入员工姓名",
  label: '注册来源：',
  required: true,
  Component: Input
}]

export const costsByCard = [{
  name: "costs",
  placeholder: "请输入",
  label: '扣费：',
  backgroundText: '元/会员卡',
  required: true,
  Component: Input,
}, {
  name: "discount",
  placeholder: "请输入",
  label: '折扣：',
  required: true,
  Component: Input,
}, {
  name: "reality",
  placeholder: "请输入",
  label: '实际扣费：',
  backgroundText: '元',
  required: true,
  Component: Input,
}]

export const costsBySelf = [{
  name: "costs",
  placeholder: "请输入",
  label: '扣费：',
  required: true,
  Component: Input,
}]

export const costsByNum = [{
  name: "costs",
  placeholder: "请输入",
  label: '扣费：',
  required: true,
  Component: Input,
}]

export const getCosts = ({
  idx,
  onSelect,
}) => {
let list = [{
    label: '产品类型：',
    name: "type",
    placeholder: "请选择",
    required: true,
    Component: SelectSelf,
  }, {
    name: "date",
    label: '服务日期：',
    placeholder: "请选择",
    required: true,
    Component: DatePickerSelf,
  },
  {
    name: "staff",
    label: '服务员工：',
    placeholder: "请选择",
    required: true,
    Component: SelectSelf,
  },
  {
    name: "staff1",
    label: '服务助理：',
    placeholder: "请选择",
    required: true,
    Component: SelectSelf,
  },
  {
    name: "costsType",
    label: '扣费：',
    placeholder: "请选择",
    required: true,
    tabs: ["会员卡", "非会员卡", "此卡支付"],
    onSelect,
    Component: TableTabs,
  }]
  list = list.slice(0, 5)
  if (idx === 0) {
    return [...list, ...costsByCard]
  } else if (idx === 1) {
    return [...list, ...costsBySelf]
  } 
  return [...list, ...costsByNum]
}


