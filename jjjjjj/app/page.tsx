
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* 顶部导航栏 - 优化渐变色彩 */}
      <div className="fixed top-0 w-full bg-gradient-to-r from-blue-100 via-blue-50 to-purple-100 px-4 py-3 flex items-center justify-between z-10 shadow-sm">
        <i className="ri-arrow-left-line text-lg text-gray-700"></i>
        <span className="text-lg font-semibold text-gray-800">我的钱包</span>
        <div className="flex items-center space-x-3">
          <i className="ri-headphone-line text-lg text-gray-700"></i>
          <i className="ri-shield-check-line text-lg text-gray-700"></i>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="pt-16 pb-6 px-4">
        {/* 先用后付和我的收入组合卡片 - 添加渐变景深效果 */}
        <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100/50 mb-4 overflow-hidden relative">
          {/* 渐变景深层 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50 pointer-events-none"></div>
          
          {/* 先用后付卡片部分 */}
          <div className="relative p-4 flex items-center justify-between border-b border-gray-100/50">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm" style={{backgroundColor: '#00C853'}}>
                <i className="ri-check-line text-white text-xs"></i>
              </div>
              <span className="text-sm text-gray-700">先用后付</span>
              <span className="text-sm text-gray-600">0元下单 无忧购物</span>
            </div>
            <button className="text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 px-3 py-1.5 rounded-full" style={{backgroundColor: '#00C853', color: '#FFFFFF'}}>
              领权益
            </button>
          </div>

          {/* 我的收入卡片部分 */}
          <div className="relative p-5">
            <Link href="/income">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700 font-medium">我的收入</span>
                  <i className="ri-eye-line text-gray-400 text-xs"></i>
                </div>
                <i className="ri-arrow-right-s-line text-gray-400"></i>
              </div>
            </Link>
            <div className="text-3xl font-bold text-black mb-6">133433.3</div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">快币(充值)</div>
                <div className="text-lg font-normal text-black">0</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">优惠券</div>
                <div className="text-lg font-normal text-black">1</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">银行卡</div>
                <div className="text-lg font-normal text-black">去绑定</div>
              </div>
            </div>
          </div>
        </div>

        {/* 账单卡片 - 优化账单模块样式 */}
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <i className="ri-file-list-3-line text-lg text-gray-700"></i>
              <span className="text-base font-semibold text-gray-800">账单</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">查看</span>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">5天前 快币充值-退款</span>
            <span className="text-xs font-medium text-black">+¥6</span>
          </div>
        </div>

        {/* 优惠卡片网格 - 优化双列布局和配色 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md border border-orange-100/50">
            <div className="text-base font-semibold mb-2 text-gray-800">银行卡支付</div>
            <div className="mb-3">
              <span className="text-lg font-bold text-orange-500">最高优惠2.6元</span>
            </div>
            <div className="text-xs text-gray-500 mb-3">专属优惠</div>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-lg text-sm w-full shadow-sm hover:shadow-md hover:bg-orange-500 transition-all duration-200 font-medium">去使用</button>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-4 shadow-md border border-pink-100/50 relative">
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-sm font-medium">荐</div>
            <div className="text-base font-semibold mb-2 text-gray-800">先用后付</div>
            <div className="mb-3">
              <span className="text-lg font-bold text-red-500">0元下单</span>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm w-full mt-6 shadow-sm hover:shadow-md hover:bg-red-600 transition-all duration-200 font-medium">查看详情</button>
          </div>
        </div>

        {/* 功能图标网格第一行 - 优化图标布局和交互 */}
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100/50">
          <div className="grid grid-cols-5 gap-3">
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="relative mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto shadow-sm hover:shadow-md transition-shadow duration-200">
                  <i className="ri-home-4-line text-xl text-gray-700"></i>
                </div>
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow-sm font-medium">满20%</div>
              </div>
              <span className="text-xs text-gray-700 font-medium">国家补贴</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-smartphone-line text-xl text-blue-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">充值中心</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-fire-line text-xl text-orange-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">上热门</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-exchange-dollar-line text-xl text-green-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">兑换快币</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-task-line text-xl text-purple-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">主播任务</span>
            </div>
          </div>
        </div>

        {/* 功能图标网格第二行 - 优化第二行图标样式 */}
        <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100/50">
          <div className="grid grid-cols-5 gap-3">
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-user-settings-line text-xl text-indigo-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">主播中心</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-heart-3-line text-xl text-pink-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">粉丝团榜竞</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-money-cny-circle-line text-xl text-yellow-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">作者变现</span>
            </div>
            <div className="text-center transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-trophy-line text-xl text-red-600"></i>
              </div>
              <span className="text-xs text-gray-700 font-medium">磁力金牛</span>
            </div>
            <div className="text-center relative transform transition-all duration-200 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <i className="ri-apps-2-line text-xl text-gray-600"></i>
              </div>
              <div className="absolute top-0 right-4 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
              <span className="text-xs text-gray-700 font-medium">全部</span>
            </div>
          </div>
        </div>

        {/* 底部银行卡推广卡片 - 优化底部广告样式 */}
        <div className="bg-gradient-to-r from-orange-100 via-yellow-50 to-yellow-100 rounded-xl p-4 flex items-center justify-between shadow-md border border-orange-200/50">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
              <div className="w-6 h-4 bg-yellow-400 rounded-sm shadow-sm"></div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-800">笔笔立减 安全·便捷·福利多</div>
              <div className="text-xs text-gray-600">银行卡支付 低至1分购</div>
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg hover:bg-red-600 transition-all duration-200 font-medium">去看看</button>
        </div>
      </div>
    </div>
  );
}
