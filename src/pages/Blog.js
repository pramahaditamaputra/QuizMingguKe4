import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Blog = ({
  showBlog,
  setShowBlog,
  showCardProfile,
  setShowCardProfile,
  showMenu,
  setShowMenu,
}) => {
  const [blogs, setBlogs] = useState("");
  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url:
        "https://dummyapi.io/data/api/user/0F8JIqi4zwvb77FGz6Wt/post?limit=5",
      headers: {
        "app-id": "601cbc4bba8d73216f9cf02c",
      },
    })
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setShowCardProfile(
        "section-vcardbody section-home ps-container section-vcardbody-pgactive"
      );
      setShowBlog("section-vcardbody section-page section-page-active");
      setShowMenu("main-menu main-menu-pgactive");
    }, 100);
    return () => {
      setShowBlog("section-vcardbody section-page");
    };
  }, [fetchData]);

  return (
    <>
      <div className={showBlog} id="page-blog">
        <div className="section-blog">
          <h2 className="section-title">Blog</h2>
          <div className="blog-posts">
            {blogs && console.log(blogs)}
            {blogs &&
              blogs.data.map((blog, index) => {
                return (
                  <div key={blog.id}>
                    <div className="blog-item">
                      <div className="blog-item-wrapper">
                        <div className="blog-item-thumb">
                          <a href="single.html" className="loadPost">
                            <img src={blog.image} alt="" />
                          </a>
                        </div>
                        <div className="blog-item-infos">
                          <div className="blog-item-title-wrapper">
                            <h2 className="blog-item-title title-border">
                              <a href="single.html" className="loadPost">
                                {blog.text}
                              </a>
                            </h2>
                          </div>
                          <div className="blog-item-description">
                            <p>
                              <a href="single.html" className="loadPost">
                                {blog.text}
                              </a>
                            </p>
                          </div>
                          <div className="blog-item-link">
                            <a
                              href="single.html"
                              className="btn btn-default loadPost"
                            >
                              See More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
