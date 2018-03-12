import mongoose from 'mongoose'
import { resolve } from 'path'
import fs from 'fs'
import config from '../config'

const models = resolve(__dirname, '../database/schema')

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*js$/))
  .forEach(file => require(resolve(models, file)))

export const database = app => {
  mongoose.set('debug', true)

  // 连接数据库
  mongoose.connect(config.db)

  // 如果连接中断，重新连接数据库
  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })

  // 如果连接出错，重新连接数据库
  mongoose.connection.on('error' , err => {
    console.error(err)
  })

  // 当数据库打开时
  mongoose.connection.on('open' , async => {
    console.log('Connected to MongoDB', config.db)
  })
}