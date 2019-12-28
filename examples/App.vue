<template>
  <div id="app">
    <div class="sidebar">
      <bt-sidebar title="BestUI"
        :menus="menus">
      </bt-sidebar>
    </div>
    <div class="content">
      <bt-panel>
        <bt-button>Send Email</bt-button>
        <bt-button type="primary">Send Email</bt-button>
        <bt-button type="info">Send Email</bt-button>
        <bt-button type="warn">Send Email</bt-button>
        <bt-button type="primary" circle icon="mbri-plus"></bt-button>
        <bt-button disabled type="primary">Send Email</bt-button>
      </bt-panel>
      <bt-panel>
        <bt-input placeholder="Enter something"></bt-input>
      </bt-panel>
      <bt-panel>
        <bt-input type="textarea"
          placeholder="Enter something">
        </bt-input>
      </bt-panel>
      <bt-panel>
        <bt-input disabled
          placeholder="Enter something">
        </bt-input>
      </bt-panel>
      <bt-panel>
        <bt-input type="textarea"
          :rows="4"
          placeholder="Enter something">
        </bt-input>
      </bt-panel>
      <bt-panel>
        <bt-select v-model="select">
          <bt-option :value="0"
            label="Vue">
          </bt-option>
          <bt-option :value="1"
            label="React">
          </bt-option>
          <bt-option :value="2"
            label="Angular">
          </bt-option>
        </bt-select>
      </bt-panel>
      <bt-panel>
        <bt-select v-model="select" disabled>
          <bt-option :value="0"
            label="Vue">
          </bt-option>
          <bt-option :value="1"
            label="React">
          </bt-option>
          <bt-option :value="2"
            label="Angular">
          </bt-option>
        </bt-select>
      </bt-panel>
      <bt-panel>
        <bt-table :data="list">
          <bt-table-column
            label="Name"
            prop="name">
            <span slot="header" slot-scope="{label}">{{label}}</span>
            <span slot-scope="{name, href}">
              <a :href="href">{{name}}</a>
            </span>
          </bt-table-column>
          <bt-table-column
            label="Age"
            prop="age">
          </bt-table-column>
          <bt-table-column
            label="City"
            prop="city">
          </bt-table-column>
        </bt-table>
        <bt-pagination :page.sync="page"
          :page-size.sync="pageSize"
          :total="1000">
        </bt-pagination>
      </bt-panel>
      <bt-panel>
        <bt-tag icon="mbri-close">open</bt-tag>
        <bt-tag icon="mbri-close" type="primary">open</bt-tag>
        <bt-tag icon="mbri-close" type="info">open</bt-tag>
        <bt-tag icon="mbri-close" type="warn">open</bt-tag>
      </bt-panel>
      <bt-panel>
        <bt-checkbox v-model="checked">React</bt-checkbox>
        <bt-checkbox v-model="check1">Vue</bt-checkbox>
        <bt-checkbox v-model="check2" disabled>Angular</bt-checkbox>
      </bt-panel>
      <bt-panel>
        <bt-radio v-model="radio" :label="1">React</bt-radio>
        <bt-radio v-model="radio" :label="2">Vue</bt-radio>
        <bt-radio v-model="radio" :label="3" disabled>Angular</bt-radio>
      </bt-panel>
      <bt-panel>
        <bt-row>
          <bt-col :span="8">
            <bt-input placeholder="Enter something"></bt-input>
          </bt-col>
          <bt-col :span="8">
            <bt-input placeholder="Enter something"></bt-input>
          </bt-col>
          <bt-col :span="8">
            <bt-input placeholder="Enter something"></bt-input>
          </bt-col>
        </bt-row>
      </bt-panel>
      <bt-panel>
        <bt-tab></bt-tab>
      </bt-panel>
      <bt-panel>
        <bt-form :model="formModel" :rules="formRules">
          <bt-form-item label="Name" prop="name">
            <bt-input slot-scope="{model}" v-model="model.name"></bt-input>
          </bt-form-item>
          <bt-form-item label="Age" prop="age">
            <bt-input slot-scope="{model}" v-model="model.age"></bt-input>
          </bt-form-item>
          <bt-form-item>
            <bt-button style="width: 100%;" type="primary" @click="handleSubmit">Submit</bt-button>
          </bt-form-item>
        </bt-form>
      </bt-panel>
      <bt-panel>
        <bt-row>
          <bt-col :span="8">
            <bt-date-picker
              v-model="currentTime">
            </bt-date-picker>
          </bt-col>
        </bt-row>
      </bt-panel>
    <div class="content-container">
      <div class="header">
        <bt-header></bt-header>
      </div>
      <div class="content">
        <bt-panel>
          <bt-button>Send Email</bt-button>
          <bt-button type="primary">Send Email</bt-button>
          <bt-button type="info">Send Email</bt-button>
          <bt-button type="warn">Send Email</bt-button>
          <bt-button type="primary" circle icon="mbri-plus"></bt-button>
          <bt-button disabled type="primary">Send Email</bt-button>
        </bt-panel>
        <bt-panel>
          <bt-input placeholder="Enter something"></bt-input>
        </bt-panel>
        <bt-panel>
          <bt-input type="textarea"
            placeholder="Enter something">
          </bt-input>
        </bt-panel>
        <bt-panel>
          <bt-input disabled
            placeholder="Enter something">
          </bt-input>
        </bt-panel>
        <bt-panel>
          <bt-input type="textarea"
            :rows="4"
            placeholder="Enter something">
          </bt-input>
        </bt-panel>
        <bt-panel>
          <bt-select v-model="select">
            <bt-option :value="0"
              label="Vue">
            </bt-option>
            <bt-option :value="1"
              label="React">
            </bt-option>
            <bt-option :value="2"
              label="Angular">
            </bt-option>
          </bt-select>
        </bt-panel>
        <bt-panel>
          <bt-select v-model="select" disabled>
            <bt-option :value="0"
              label="Vue">
            </bt-option>
            <bt-option :value="1"
              label="React">
            </bt-option>
            <bt-option :value="2"
              label="Angular">
            </bt-option>
          </bt-select>
        </bt-panel>
        <bt-panel>
          <bt-table :data="list">
            <bt-table-column
              label="Name"
              prop="name">
              <span slot="header" slot-scope="{label}">{{label}}</span>
              <span slot-scope="{name, href}">
                <a :href="href">{{name}}</a>
              </span>
            </bt-table-column>
            <bt-table-column
              label="Age"
              prop="age">
            </bt-table-column>
            <bt-table-column
              label="City"
              prop="city">
            </bt-table-column>
          </bt-table>
          <bt-pagination :page.sync="page"
            :page-size.sync="pageSize"
            :total="1000">
          </bt-pagination>
        </bt-panel>
        <bt-panel>
          <bt-tag icon="mbri-close">open</bt-tag>
          <bt-tag icon="mbri-close" type="primary">open</bt-tag>
          <bt-tag icon="mbri-close" type="info">open</bt-tag>
          <bt-tag icon="mbri-close" type="warn">open</bt-tag>
        </bt-panel>
        <bt-panel>
          <bt-checkbox v-model="checked">React</bt-checkbox>
          <bt-checkbox v-model="check1">Vue</bt-checkbox>
          <bt-checkbox v-model="check2" disabled>Angular</bt-checkbox>
        </bt-panel>
        <bt-panel>
          <bt-radio v-model="radio" :label="1">React</bt-radio>
          <bt-radio v-model="radio" :label="2">Vue</bt-radio>
          <bt-radio v-model="radio" :label="3" disabled>Angular</bt-radio>
        </bt-panel>
        <bt-panel>
          <bt-row>
            <bt-col :span="8">
              <bt-input placeholder="Enter something"></bt-input>
            </bt-col>
            <bt-col :span="8">
              <bt-input placeholder="Enter something"></bt-input>
            </bt-col>
            <bt-col :span="8">
              <bt-input placeholder="Enter something"></bt-input>
            </bt-col>
          </bt-row>
        </bt-panel>
        <bt-panel>
          <bt-form :model="formModel" :rules="formRules">
            <bt-form-item label="Name" prop="name">
              <bt-input slot-scope="{model}" v-model="model.name"></bt-input>
            </bt-form-item>
            <bt-form-item label="Age" prop="age">
              <bt-input slot-scope="{model}" v-model="model.age"></bt-input>
            </bt-form-item>
            <bt-form-item>
              <bt-button style="width: 100%;" type="primary" @click="handleSubmit">Submit</bt-button>
            </bt-form-item>
          </bt-form>
        </bt-panel>
        <bt-panel>
          <bt-row>
            <bt-col :span="8">
              <bt-date-picker
                v-model="currentTime">
              </bt-date-picker>
            </bt-col>
          </bt-row>
        </bt-panel>
      </div>
    </div>
  </div>
</template>

<script>

import { createFormModel } from '~/form'

export default {
  name: 'app',
  data () {
    return {
      check1: false,
      check2: false,
      checked: true,
      radio: 1,
      select: 0,
      list: [
        { name: 'Tom', age: 24, href: 'https://www.qq.com', city: 'SZ' },
        { name: 'Jhon', age: 25, href: 'https://lgybetter.com', city: 'GZ' },
        { name: 'Sam', age: 26, href: 'https://www.github.com', city: 'SH' }
      ],
      formModel: createFormModel({
        name: 'Best',
        age: '2'
      }),
      formRules: {
        name: [
          { required: true, message: 'name required' }
        ],
        age: [
          { required: true, message: 'age required', trigger: 'blur' }
        ]
      },
      page: 2,
      pageSize: 5,
      currentTime: new Date(),
      menus: [
        {
          icon: 'mbri-desktop',
          label: 'My DeskTop'
        },
        {
          icon: 'mbri-shopping-cart',
          label: 'Shopping Cart'
        },
        {
          icon: 'mbri-star',
          label: 'My Collections'
        }
      ]
    }
  },
  methods: {
    handleSubmit () {
      this.formModel.validate()
    }
  }
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  position: relative;
}
.sidebar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 11;
}
.content-container {
  position: relative;
  width: 100%;
  padding-left: 260px;
  height: 100%;
}
.header {
  position: absolute;
  padding-left: 260px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.content {
  padding: 40px;
  padding-top: 100px;
  overflow: auto;
  height: 100%;
}
</style>
