const tip = '我不是很懂你的意思'

export default async (ctx, next) => {
  const message = ctx.weixin

  if (message.MsgType === 'text') {
    ctx.body = message.Content
  } else if (message.MsgType === 'image') {
    ctx.body = {
      msgType: 'image',
      mediaId: message.MediaId
    }
  } else if (message.MsgType === 'voice') {
    ctx.body = {
      msgType: 'voice',
      mediaId: message.mediaId
    }
  } else if (message.MsgType === 'video') {
    ctx.body = {
      title: message.ThumbMediaId,
      msgType: 'video',
      mediaId: message.mediaId
    }
  } else if (message.MsgType === 'location') {
    ctx.body = message.Location_X + ' : ' 
              + message.Location_Y + ' : ' 
              + Label
  } else if (message.MsgType === 'link') {
    ctx.body = message.title
  } else {
    ctx.body = tip    
  }
}