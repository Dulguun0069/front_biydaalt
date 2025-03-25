import React from 'react';
import {Form, Input, Select} from 'antd';

const Filter = ({filters, setFilters}) => {
    return(
        <Form layout="inline" style={{marginBottom : "20px",
            paddingLeft : "30px", justifyContent : "space-between"}}>
                <Form.Item>
                    <Input 
                    placeholder="Name"
                    style={{width : 220}}
                    value={filters.name}
                    onChange={(e) => setFilters ({ ...filters, name: e.target})}/>
                </Form.Item>
                <Form.Item>
                    <Select 
                    placeholder="Select Color"
                    allowClear
                    style={{width : 200}}
                    onChange={(value) => setFilters({...filters, color : value})}>
                        <Select.Option value="red">Red</Select.Option>
                        <Select.Option value="blue">Red</Select.Option>
                        <Select.Option value="yellow">Red</Select.Option>
                        <Select.Option value="white">Red</Select.Option>
                        <Select.Option value="gray">Red</Select.Option>
                        <Select.Option value="purple">Red</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Input type="number"
                    placeholder="Min price"
                    style={{width : 200}}
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice : e.target.value})}/>
                </Form.Item>
                <Form.Item>
                    <Input type="number"
                    placeholder="Max price"
                    style={{width : 200}}
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, minPrice : e.target.value})}/>
                </Form.Item>
            </Form>
    )
}
export default Filter;