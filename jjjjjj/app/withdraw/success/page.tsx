
'use client';

import Link from 'next/link';

export default function WithdrawSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
      {/* 顶部导航栏 */}
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between z-10">
        <Link href="/withdraw">
          <i className="ri-arrow-left-line text-xl text-gray-800"></i>
        </Link>
        <span className="text-lg font-medium text-gray-800">提现详情</span>
        <span className="text-sm text-black">我知道了</span>
      </div>

      {/* 主要内容区域 */}
      <div className="pt-16 px-6 flex flex-col items-center">
        {/* 成功状态显示 */}
        <div className="flex items-center mb-6 mt-8">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
            <i className="ri-check-line text-white text-sm"></i>
          </div>
          <span className="text-lg font-medium text-gray-800">提现申请成功</span>
        </div>

        {/* 金额显示 */}
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-black mb-4">¥77</div>
          <p className="text-sm text-gray-600 mb-2">提现申请已提交至 银行卡（）</p>
        </div>

        {/* 提示信息 */}
        <div className="text-center text-sm text-gray-500 mb-8">
          <p>请前往往「我的钱包-账单」查看提现结果</p>
        </div>

        {/* 操作按钮 */}
        <div className="flex space-x-4 w-full max-w-sm">
          <Link href="/income" className="flex-1">
            <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors !rounded-button">
              查看账单
            </button>
          </Link>
          <Link href="/withdraw" className="flex-1">
            <button className="w-full py-3 bg-red-500 text-white rounded-lg text-base font-medium hover:bg-red-600 transition-colors !rounded-button">
              完成
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
