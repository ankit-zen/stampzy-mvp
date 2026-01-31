import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, ThumbsDown, MessageCircle, Bookmark, MoreVertical } from 'lucide-react';
import { Card } from '../components/Card';
import { IconButton } from '../components/IconButton';
import { posts } from '../data/mockData';
import { Post } from '../types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export const Feed: React.FC = () => {
  const [postStates, setPostStates] = useState<Record<string, Post>>(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: post }), {})
  );

  const handleLike = (postId: string) => {
    setPostStates((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        isLiked: !prev[postId].isLiked,
        isDisliked: false,
        likes: prev[postId].isLiked
          ? prev[postId].likes - 1
          : prev[postId].likes + 1,
      },
    }));
  };

  const handleDislike = (postId: string) => {
    setPostStates((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        isDisliked: !prev[postId].isDisliked,
        isLiked: false,
        dislikes: prev[postId].isDisliked
          ? prev[postId].dislikes - 1
          : prev[postId].dislikes + 1,
      },
    }));
  };

  const handleSave = (postId: string) => {
    setPostStates((prev) => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        isSaved: !prev[postId].isSaved,
      },
    }));
  };

  return (
    <div className="pb-24 px-6 max-w-2xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 mt-6"
      >
        {Object.values(postStates).map((post) => (
          <motion.div key={post.id} variants={item}>
            <Card className="overflow-hidden">
              {/* User Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold"
                  >
                    {post.user.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-text-primary">
                      {post.user.name}
                    </h4>
                    <p className="text-sm text-text-tertiary">
                      @{post.user.username}
                    </p>
                  </div>
                </div>
                <IconButton
                  icon={<MoreVertical size={20} />}
                  label="More options"
                  className="text-text-tertiary"
                />
              </div>

              {/* Stamp Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square bg-gradient-to-br from-primary-50 to-accent-50"
              >
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  📮
                </div>
              </motion.div>

              {/* Actions */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                      className="flex items-center gap-2 group"
                    >
                      <motion.div
                        animate={{
                          scale: post.isLiked ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ThumbsUp
                          size={24}
                          className={post.isLiked ? 'fill-success text-success' : 'text-text-secondary group-hover:text-success'}
                        />
                      </motion.div>
                      <span className={post.isLiked ? 'text-success font-medium' : 'text-text-secondary'}>
                        {post.likes}
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDislike(post.id)}
                      className="flex items-center gap-2 group"
                    >
                      <motion.div
                        animate={{
                          scale: post.isDisliked ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ThumbsDown
                          size={24}
                          className={post.isDisliked ? 'fill-error text-error' : 'text-text-secondary group-hover:text-error'}
                        />
                      </motion.div>
                      <span className={post.isDisliked ? 'text-error font-medium' : 'text-text-secondary'}>
                        {post.dislikes}
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 group"
                    >
                      <MessageCircle size={24} className="text-text-secondary group-hover:text-primary-600" />
                      <span className="text-text-secondary">{post.comments}</span>
                    </motion.button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleSave(post.id)}
                  >
                    <motion.div
                      animate={{
                        scale: post.isSaved ? [1, 1.3, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Bookmark
                        size={24}
                        className={post.isSaved ? 'fill-primary-600 text-primary-600' : 'text-text-secondary hover:text-primary-600'}
                      />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Stamp Info */}
                <div>
                  <h3 className="font-bold text-text-primary text-lg mb-1">
                    {post.stamp.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {post.stamp.country} • {post.stamp.year}
                  </p>
                  <p className="text-accent-600 font-bold text-xl">
                    ${post.stamp.value.toLocaleString()}
                  </p>
                  <p className="text-text-tertiary text-sm mt-2">
                    {post.timestamp}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};