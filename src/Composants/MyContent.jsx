import React from 'react';
import image2 from '../Assets/Img/image2.png';
import vector1 from '../Assets/Img/Vector1.png';
import vector2 from '../Assets/Img/Vector2.png';

import '../Styles/content.css'

const MyContent = () => {
  return (
    <div>
      <div className="content">
        <div>
          <h1>Discover Your Expertise: Try Our Knowledge Test!</h1>
          <p>Embark on a comprehensive journey to assess your proficiency in both frontend and backend development with our Full-Stack Developer Quiz. This interactive quiz is meticulously crafted to challenge your understanding of programming languages.</p>
          <a id="btn2" href="#">START Test</a>
        </div>
        <img id="pic1" src={image2} />
      </div>

      <img id="pic2" src={vector1} />
      <img id="pic3" src={vector2} />
    </div>
  );
};

export default MyContent;
