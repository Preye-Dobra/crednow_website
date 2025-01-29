import { useState } from 'react';
import AddCircle from '../assets/custom-icons/AddCircle';
import MinusCircle from '../assets/custom-icons/MinusCircle';

const Accordionitem = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=''>
      {data.map((item, index) => (
        <div className='xui-mt-1-half xui-cursor-pointer xui-p-1 xui-bdr-rad-half xui-bg-white' key={index} onClick={() => toggleItem(index)}>
          <div className={'xui-d-flex xui-flex-ai-center xui-flex-jc-space-between ' + (activeIndex === index ? 'begorah-bg-blue-iii' : 'xui-bg-none')}>
            <h3 className='xui-lg-font-sz-100 color-label xui-font-w-500 '>{item.question}</h3>
            {activeIndex !== index &&
            <AddCircle />
            
            }
            {activeIndex === index &&
              <MinusCircle />
            }
        
          </div>
          {activeIndex === index &&
           <div className='xui-py-half xui-pos-relative'>
              <p className='xui-opacity-6 xui-lg-font-sz-90 color-active xui-font-w-500 xui-line-height-1-half'>{item.answer}</p>
           </div>
           }
        </div>
      ))}
    
    </div>
  );
};

export default Accordionitem;