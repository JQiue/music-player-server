const { responseSong } = require('../util/song');

const songs = [{
    id: 0,
    artist: 'Beth',
    title: 'Let Me Down Slowly (Acoustic)',
    path: 'Beth - Let Me Down Slowly (Acoustic).mp3'
  },
  {
    id: 1,
    artist: '凤凰传奇',
    title: '海底 (Live)',
    path: '凤凰传奇 - 海底 (Live).mp3'
  },
  {
    id: 2,
    artist: '和田薫 (わだかおる)',
    title: '時代を越える想い (穿越时空的思念) (Piano Concerto~Bonus Track )',
    path: '和田薫 (わだかおる) - 時代を越える想い (穿越时空的思念) (Piano Concerto~Bonus Track ).mp3'
  },
  {
    id: 3,
    artist: '小时姑娘',
    title: '爱殇.mp3',
    path: '小时姑娘 - 爱殇.mp3'
  },
  {
    id: 4,
    artist: undefined,
    title: '老男孩（女生版）',
    path: '老男孩（女生版）.mp3'
  },
  {
    id: 5,
    artist: '高桥李依',
    title: '小さな恋のうた (小小恋歌)',
    path: '高桥李依 - 小さな恋のうた (小小恋歌).mp3'
  }
]

const getSongList = (req, res) => {
  return Promise.resolve(songs);
}
const getSongFile = (req, res) => {
  const song = songs.find(value => {
    if (req.query.id == value.id) {
      return true;
    }
  });
  return responseSong(req, res, song);
}

module.exports = {
  getSongList,
  getSongFile
}