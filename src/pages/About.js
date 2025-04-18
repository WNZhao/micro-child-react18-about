import React, { useEffect, useState } from 'react';
import { aboutApi } from '../api/about';

function About() {
  const [aboutContent, setAboutContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await aboutApi.getPlatformAboutUs();
        if (response.success) {
          setAboutContent(response.data);
        } else {
          setError(response.message || '获取数据失败');
        }
      } catch (err) {
        setError(err.message || '获取数据失败');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutContent();
  }, []);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div>错误：{error}</div>;
  }

  return (
    <div className="about-container">
      <h1>关于我们</h1>
      <div className="about-content">
        {aboutContent.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default About; 