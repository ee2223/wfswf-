
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WithdrawPage() {
  const [customAmount, setCustomAmount] = useState<string>('');
  const [showMoreMethods, setShowMoreMethods] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('bank');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleWithdraw = () => {
    const withdrawAmount = customAmount || '0';
    setShowWithdrawModal(true);
  };

  const handleConfirmWithdraw = async () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowWithdrawModal(false);

      // 计算实际到账金额
      const actualAmount = customAmount ? (parseFloat(customAmount) - (parseFloat(customAmount) * 0.28)).toFixed(2) : '0.00';

      // 跳转到成功页面，携带提现信息
      const params = new URLSearchParams({
        amount: customAmount || '0',
        method: selectedPaymentMethod,
        actualAmount: actualAmount
      });

      setCustomAmount('');
      router.push(`/withdraw/success?${params.toString()}`);
    }, 2000);
  };

  const getPaymentMethodText = () => {
    switch(selectedPaymentMethod) {
      case 'wechat': return '微信支付';
      case 'alipay': return '支付宝';
      default: return '银行卡';
    }
  };

  const getArrivalTime = () => {
    switch(selectedPaymentMethod) {
      case 'wechat': 
      case 'alipay': return '2小时内';
      default: return '72小时内';
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <div className="fixed top-0 w-full bg-white px-4 py-4 flex items-center justify-center z-10 border-b border-gray-100 relative">
        <Link href="/income" className="absolute left-4">
          <i className="ri-arrow-left-line text-xl text-gray-800"></i>
        </Link>
        <span className="text-lg font-medium text-gray-800">提现</span>
      </div>

      <div className="fixed top-16 w-full bg-gradient-to-r from-pink-100 to-pink-200 px-4 py-2 z-10 flex items-center overflow-hidden">
        <i className="ri-volume-up-line text-pink-500 text-sm mr-2 flex-shrink-0"></i>
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-pink-600 text-xs">银行系统维护中，部分提现需要72小时内到账，请您耐心等待</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>

      <div className="pt-28 px-6 relative pb-32">
        <div className="mb-6">
          <span className="text-gray-700 text-base font-medium">提现金额</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-200 pb-3">
            <span className="text-3xl text-black mr-4">¥</span>
            <input
              type="number"
              placeholder="请输入提现金额"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="flex-1 text-lg text-gray-600 placeholder-gray-400 outline-none bg-transparent"
              step="0.01"
              min="0.30"
            />
            <button
              className="text-blue-500 text-sm"
              onClick={() => setCustomAmount('41200.0')}
            >
              全部提现
            </button>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-gray-500 text-sm">可提现余额41200.0元</span>
          <div className="text-gray-400 text-xs mt-1 flex items-center">
            <span>单笔提现最少0.30元，最多41200.0元</span>
            <i className="ri-question-line ml-1"></i>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <img
              src="https://readdy.ai/api/search-image?query=China%20UnionPay%20credit%20card%20icon%2C%20blue%20and%20red%20logo%2C%20financial%20payment%20system%2C%20clean%20modern%20design%2C%20isolated%20on%20white%20background%2C%20high%20quality%20vector%20style&width=40&height=30&seq=unionpay-icon&orientation=landscape"
              alt="银联"
              className="w-6 h-4 mr-2"
            />
            <span className="text-sm text-gray-800 font-medium">提现至银行卡</span>
          </div>

          <div className="flex space-x-3 overflow-x-auto pb-2">
            <button 
              className={`flex-shrink-0 rounded-xl p-4 shadow-lg border transform transition-all duration-200 hover:shadow-xl hover:scale-105 min-w-[140px] ${
                selectedPaymentMethod === 'bank' 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-white border-gray-100'
              }`}
              onClick={() => setSelectedPaymentMethod('bank')}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-2 h-6 rounded-full ${
                  selectedPaymentMethod === 'bank' ? 'bg-blue-500' : 'bg-gray-300'
                }`}></div>
                <img
                  src="https://readdy.ai/api/search-image?query=ICBC%20Industrial%20and%20Commercial%20Bank%20of%20China%20official%20app%20icon%2C%20red%20square%20with%20ICBC%20logo%2C%20mobile%20banking%20app%20store%20style%2C%20realistic%203D%20effect%2C%20glossy%20finish%2C%20clean%20design%2C%20isolated%20on%20white%20background&width=24&height=24&seq=icbc-app-logo&orientation=squarish"
                  alt="工商银行"
                  className="w-6 h-6 rounded-lg shadow-sm"
                />
                <span className="text-xs text-gray-600">工商银行储蓄卡</span>
              </div>
            </button>

            <button 
              className={`flex-shrink-0 rounded-xl p-4 shadow-lg border transform transition-all duration-200 hover:shadow-xl hover:scale-105 min-w-[140px] ${
                selectedPaymentMethod === 'ccb' 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'bg-white border-gray-100'
              }`}
              onClick={() => setSelectedPaymentMethod('ccb')}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-2 h-6 rounded-full ${
                  selectedPaymentMethod === 'ccb' ? 'bg-red-500' : 'bg-gray-300'
                }`}></div>
                <img
                  src="https://readdy.ai/api/search-image?query=China%20Construction%20Bank%20CCB%20official%20app%20icon%2C%20blue%20square%20with%20dragon%20and%20CCB%20logo%2C%20mobile%20banking%20app%20store%20style%2C%20realistic%203D%20effect%2C%20glossy%20finish%2C%20clean%20design%2C%20isolated%20on%20white%20background&width=24&height=24&seq=ccb-app-logo&orientation=squarish"
                  alt="建设银行"
                  className="w-6 h-6 rounded-lg shadow-sm"
                />
                <span className="text-xs text-gray-600">建设银行信用卡</span>
              </div>
            </button>

            <button className="flex-shrink-0 bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300 transform transition-all duration-200 hover:border-gray-400 min-w-[100px] flex flex-col items-center justify-center">
              <i className="ri-add-line text-gray-400 text-xl mb-1"></i>
              <span className="text-xs text-gray-500">更多</span>
            </button>
          </div>
        </div>

        <div className="text-center mb-6">
          <button
            className="flex items-center mx-auto text-gray-500 text-sm"
            onClick={() => setShowMoreMethods(!showMoreMethods)}
          >
            <span>更多到账方式</span>
            <i className={`ri-arrow-${showMoreMethods ? 'up' : 'down'}-s-line ml-1 transition-transform duration-200`}></i>
          </button>

          {showMoreMethods && (
            <div className="mt-4 bg-gray-50 rounded-xl p-4 mx-4">
              <div className="space-y-3">
                <button 
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    selectedPaymentMethod === 'wechat' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedPaymentMethod('wechat')}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <img
                      src="https://readdy.ai/api/search-image?query=WeChat%20app%20icon%2C%20official%20WeChat%20logo%2C%20green%20gradient%20square%20with%20white%20speech%20bubble%20icon%2C%20mobile%20app%20store%20style%2C%20realistic%203D%20effect%2C%20glossy%20finish%2C%20clean%20design%2C%20isolated%20on%20white%20background&width=32&height=32&seq=wechat-app-icon&orientation=squarish"
                      alt="微信支付"
                      className="w-8 h-8 rounded-lg shadow-sm"
                    />
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-800">微信支付</div>
                      <div className="text-xs text-gray-500">实时到账</div>
                    </div>
                  </div>
                  {selectedPaymentMethod === 'wechat' && (
                    <i className="ri-check-line text-green-500"></i>
                  )}
                </button>

                <button 
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    selectedPaymentMethod === 'alipay' 
                      ? 'bg-blue-50 border border-blue-200' 
                      : 'bg-white'
                  }`}
                  onClick={() => setSelectedPaymentMethod('alipay')}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <img
                      src="https://readdy.ai/api/search-image?query=Alipay%20app%20icon%2C%20official%20Alipay%20logo%2C%20blue%20gradient%20square%20with%20white%20stylized%20A%20letter%2C%20mobile%20app%20store%20style%2C%20realistic%203D%20effect%2C%20glossy%20finish%2C%20clean%20design%2C%20isolated%20on%20white%20background&width=32&height=32&seq=alipay-app-icon&orientation=squarish"
                      alt="支付宝"
                      className="w-8 h-8 rounded-lg shadow-sm"
                    />
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-800">支付宝</div>
                      <div className="text-xs text-gray-500">实时到账</div>
                    </div>
                  </div>
                  {selectedPaymentMethod === 'alipay' && (
                    <i className="ri-check-line text-blue-500"></i>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="px-2">
          <button
            className={`w-full py-3 rounded-lg text-base font-medium !rounded-button transition-all duration-200 ${
              customAmount && parseFloat(customAmount) >= 0.30 && parseFloat(customAmount) <= 41200.0 && selectedPaymentMethod
                ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleWithdraw}
            disabled={!customAmount || parseFloat(customAmount) < 0.30 || parseFloat(customAmount) > 41200.0 || !selectedPaymentMethod}
          >
            立即提现
          </button>
        </div>

        <div className="text-center mt-6">
          <button className="text-gray-500 text-sm flex items-center mx-auto">
            <span>如何查看微信/支付宝是否已实名</span>
            <i className="ri-arrow-right-s-line ml-1"></i>
          </button>
        </div>
      </div>

      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl w-full max-w-sm mx-4 relative">
            <button 
              className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
              onClick={() => setShowWithdrawModal(false)}
            >
              <i className="ri-close-line text-lg"></i>
            </button>

            <div className="text-center pt-6 pb-4">
              <h3 className="text-lg font-medium text-gray-800">预计到账 {customAmount ? (parseFloat(customAmount) - (parseFloat(customAmount) * 0.28)).toFixed(2) : '0.00'} 元</h3>
              <p className="text-sm text-gray-500 mt-1">申请提现金额 {customAmount || '0'} 元</p>
            </div>

            <div className="px-6 pb-4">
              <p className="text-xs text-gray-500 leading-relaxed text-center">
                本月您提现金额将扣除上述容易豪要自行承担的扣费等，同一日
                然内约提现所次或以上，需要支付扣费，具体扣费金额明细如
                下：
              </p>
            </div>

            <div className="px-6 pb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between text-sm mb-3 border-b border-gray-200 pb-2">
                  <span className="text-gray-600"></span>
                  <span className="text-gray-600">本次扣减(元)</span>
                  <span className="text-gray-600">本月累计扣减(元)</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">应缴个税</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.20).toFixed(2) : '0.00'}</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.20).toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">应缴增值税</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.06).toFixed(2) : '0.00'}</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.06).toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-800">应缴附加税</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.02).toFixed(2) : '0.00'}</span>
                    <span className="text-gray-800">{customAmount ? (parseFloat(customAmount) * 0.02).toFixed(2) : '0.00'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                注：上述相关信息遵循《中华人民共和国个人所得税法》以
                及现行相关税法的规定执行，如相关政策发生变动，会适行相
                应调整。
              </p>
            </div>

            <div className="px-6 pb-6">
              <button
                className={`w-full py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center justify-center ${
                  customAmount && parseFloat(customAmount) >= 0.30 && parseFloat(customAmount) <= 41200.0
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={handleConfirmWithdraw}
                disabled={isLoading || !customAmount || parseFloat(customAmount) < 0.30 || parseFloat(customAmount) > 41200.0}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    处理中...
                  </>
                ) : (
                  '立即提现'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
