
'use client';

import Link from 'next/link';

export default function IncomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 顶部导航栏 */}
      <div className="fixed top-0 w-full bg-white px-4 py-3 flex items-center justify-between z-10 border-b border-gray-100">
        <Link href="/">
          <i className="ri-arrow-left-line text-xl text-gray-800"></i>
        </Link>
        <span className="text-lg font-medium text-gray-800">我的收入</span>
        <div></div>
      </div>

      {/* 主要内容区域 */}
      <div className="pt-16 pb-6 px-4">
        {/* 总资产显示 */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm text-gray-500 mr-2">总资产(元)</span>
            <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
              <i className="ri-question-line text-xs text-gray-500"></i>
            </div>
          </div>
          <div className="text-4xl text-black mb-8">133433.3</div>
        </div>

        {/* 兑换快币提示 - 改为和图片一致的样式 */}
        <div className="bg-orange-50 rounded-xl p-3 flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">K</span>
            </div>
            <span className="text-xs text-yellow-600">兑换快币</span>
            <span className="text-xs text-yellow-500">使用收入金额兑换快币</span>
          </div>
          <button className="border border-yellow-500 text-yellow-500 px-3 py-1 rounded-md text-xs bg-transparent">
            立即兑换
          </button>
        </div>

        {/* 收入项目列表 */}
        <div className="space-y-4">
          {/* 快手任务中心活动奖励 */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-50 flex items-center justify-between transform transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-gray-800">快手任务中心活动奖励</span>
                <i className="ri-arrow-right-s-line text-gray-400 text-sm"></i>
              </div>
              <div className="text-xl text-black">85383.1</div>
            </div>
            <Link href="/withdraw">
              <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs shadow-sm hover:bg-red-700 transition-colors">
                去提现
              </button>
            </Link>
          </div>

          {/* 直播收入(个人) */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-50 flex items-center justify-between transform transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-gray-800">直播收入(个人)</span>
                <i className="ri-arrow-right-s-line text-gray-400 text-sm"></i>
              </div>
              <div className="text-xl text-black">41200.0</div>
            </div>
            <Link href="/withdraw">
              <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs shadow-sm hover:bg-red-700 transition-colors">
                去提现
              </button>
            </Link>
          </div>

          {/* 邀请好友现金奖励 */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-50 flex items-center justify-between transform transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-gray-800">邀请好友现金奖励</span>
                <i className="ri-arrow-right-s-line text-gray-400 text-sm"></i>
              </div>
              <div className="text-xl text-black">6850.2</div>
            </div>
            <Link href="/withdraw">
              <button className="bg-red-600 text-white px-4 py-1.5 rounded-lg text-xs shadow-sm hover:bg-red-700 transition-colors">
                去提现
              </button>
            </Link>
          </div>

          {/* 快手极速版任务中心活动奖励 */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-50 flex items-center justify-between transform transition-all duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm text-gray-800">快手极速版任务中心活动奖励</span>
                <i className="ri-arrow-right-s-line text-gray-400 text-sm"></i>
              </div>
              <div className="text-xl text-black">0.0</div>
            </div>
            <button className="bg-gray-300 text-gray-600 px-4 py-1.5 rounded-lg text-xs" disabled>
              去提现
            </button>
          </div>
        </div>

        {/* 底部提示文字 */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 mb-4">
            极速版专享，请使用当前账号登录「快手极速版」进行提现
          </p>
          <div className="flex items-center justify-center space-x-2">
            <i className="ri-shield-check-line text-gray-400 text-sm"></i>
            <span className="text-xs text-gray-400">快手科技</span>
            <span className="text-xs text-gray-400">账户安全保障中</span>
          </div>
        </div>
      </div>
    </div>
  );
}
