import { useState } from 'react'
import './App.css'
import homeDefault from './assets/icon/HomeDefault.png'
import homeSelected from './assets/icon/HomeSlected.png'
import promotionDefault from './assets/icon/PromotionDefault.png'
import promotionSelected from './assets/icon/PromotionSlected.png'
import depositDefault from './assets/icon/DepositDefault.png'
import depositSelected from './assets/icon/DepositSlected.png'
import meDefault from './assets/icon/MeDefault.png'
import meSelected from './assets/icon/MeSlected.png'
import Affiliate from './assets/icon/Affiliate.png'

const pageIcons = {
  home: { default: homeDefault, selected: homeSelected },
  games: { default: promotionDefault, selected: promotionSelected },
  Affiliate: { default: Affiliate, selected: Affiliate },
  history: { default: depositDefault, selected: depositSelected },
  profile: { default: meDefault, selected: meSelected },
}

const pages = [
  { id: 'home', label: '首页', iconKey: 'home', title: '欢迎来到熊猫博彩平台', description: '浏览最新游戏、优惠和热推赛事。' },
  { id: 'games', label: '活动', iconKey: 'games', title: '热门游戏', description: '选择赛马、轮盘、电子老虎机或体育竞猜。' },
  { id: 'Affiliate', label: '代理', iconKey: 'Affiliate', title: '实时直播', description: '观看比赛直播并即时下单。' },
  { id: 'history', label: '充值', iconKey: 'history', title: '账户记录', description: '查看下注历史、充值和提现明细。' },
  { id: 'profile', label: '我的', iconKey: 'profile', title: '个人中心', description: '管理账户信息、奖励和安全设置。' },
]

function App() {
  const [activePage, setActivePage] = useState('home')
  const [balance, setBalance] = useState(520.0)
  const [rechargeAmount] = useState(100)

  const currentPage = pages.find((page) => page.id === activePage)

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <div className="welcome-card">
              <h2>今日推荐</h2>
              <p>热推赛马、幸运转盘与真人娱乐场，为你带来极速体验。</p>
            </div>
            <div className="grid">
              <article className="card small">
                <h3>赛马玩法</h3>
                <p>最快赛马决赛，赔率高达4.8倍。</p>
              </article>
              <article className="card small">
                <h3>极速轮盘</h3>
                <p>30秒一局，广州式投注模式。</p>
              </article>
            </div>
          </>
        )
      case 'games':
        return (
          <div className="card-list">
            <article className="card">
              <h3>老虎机</h3>
              <p>经典怀旧主题，免费试玩 + 实战下注。</p>
            </article>
            <article className="card">
              <h3>体育竞猜</h3>
              <p>足球、篮球、网球热门赛事即时开盘。</p>
            </article>
          </div>
        )
      case 'Affiliate':
        return (
          <div className="card-list">
            <article className="card">
              <h3>真人荷官</h3>
              <p>百家乐、扑克和二十一点直播桌。</p>
            </article>
            <article className="card">
              <h3>赛事直播</h3>
              <p>实时比分、赔率变化与专属分析。</p>
            </article>
          </div>
        )
      case 'history':
        return (
          <div className="card-list">
            <article className="card">
              <h3>下注记录</h3>
              <p>最近 7 天内的所有投注与结果。</p>
            </article>
            <article className="card">
              <h3>资金明细</h3>
              <p>充值、提现和活动奖励一目了然。</p>
            </article>
          </div>
        )
      case 'profile':
        return (
          <div className="card-list">
            <article className="card">
              <h3>账户安全</h3>
              <p>绑定手机号、修改密码与实名认证。</p>
            </article>
            <article className="card">
              <h3>优惠活动</h3>
              <p>领取新人红包与每日返水奖励。</p>
            </article>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <div className="balance-label">账户余额</div>
          <div className="balance-amount">¥{balance.toFixed(2)}</div>
        </div>
        <button className="recharge" onClick={() => setBalance((value) => value + rechargeAmount)}>
          充值 ¥{rechargeAmount}
        </button>
      </header>

      <main className="content">
        <section className="page-header">
          <h1>{currentPage.title}</h1>
          <p>{currentPage.description}</p>
        </section>
        {renderPageContent()}
      </main>

      <nav className="bottom-nav" aria-label="底部导航">
        {pages.map((page) => (
          <button
            key={page.id}
            className={`nav-item ${activePage === page.id ? 'active' : ''}`}
            onClick={() => setActivePage(page.id)}
            type="button"
          >
            <span className="nav-icon" aria-hidden="true">
              <img
                src={activePage === page.id ? pageIcons[page.iconKey].selected : pageIcons[page.iconKey].default}
                alt=""
              />
            </span>
            <span className="nav-text">{page.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
