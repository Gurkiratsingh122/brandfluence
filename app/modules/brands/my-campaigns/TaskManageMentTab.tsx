'use client';

import { Check, X, Edit } from 'lucide-react';

interface TaskItem {
  id: number;
  creator: string;
  creatorImage: string;
  title: string;
  description: string;
  link?: string;
  hasComment?: boolean;
  thumbnail?: string;
}

export function TaskManagementTab() {
  const scriptApprovals: TaskItem[] = [
    {
      id: 1,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 2,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 3,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 4,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
      hasComment: true,
    },
  ];

  const contentApprovals: TaskItem[] = [
    {
      id: 1,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
      thumbnail: '/landscape_brand.jpg',
    },
    {
      id: 2,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
      thumbnail: '/landscape_brand.jpg',
    },
    {
      id: 3,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
      thumbnail: '/landscape_brand.jpg',
    },
  ];

  const scriptRevisions: TaskItem[] = [
    {
      id: 1,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 2,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 3,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
    },
    {
      id: 4,
      creator: '@annsmith',
      creatorImage: '/profile_brand.jpg',
      title: 'GRWM Collab — Draft 1',
      description: "Ann is a beauty enthusiast who deliver honest, in depth product review and can help... View Preview",
      link: 'View Preview',
      hasComment: true,
    },
  ];

  const TaskCard = ({ item, showButtons = true }: { item: TaskItem; showButtons?: boolean }) => (
    <div className="bg-white rounded-xl border border-[#e8e8e8] p-4 mb-3">
      <div className="flex items-start gap-2 mb-2">
        <img src={item.creatorImage} alt={item.creator} className="w-6 h-6 rounded-full" />
        <span className="text-[12px] text-[#666]">{item.creator}</span>
      </div>
      <h4 className="text-[14px] font-semibold text-[#111] mb-2">{item.title}</h4>
      
      {item.thumbnail && (
        <img src={item.thumbnail} alt="" className="w-full h-32 object-cover rounded-lg mb-2" />
      )}
      
      <p className="text-[12px] text-[#666] mb-3 line-clamp-2">
        {item.description.split('...')[0]}...{' '}
        <a href="#" className="text-[#6c78ff]">{item.link}</a>
      </p>
      
      {showButtons && (
        <div className="flex gap-2 justify-end">
          <button className="w-7 h-7 rounded-lg bg-[#d4f4dd] flex items-center justify-center hover:bg-[#c0edd0] transition-colors">
            <Check className="w-4 h-4 text-[#04b700]" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-[#ffe7e7] flex items-center justify-center hover:bg-[#ffd4d4] transition-colors">
            <X className="w-4 h-4 text-[#ff4d4f]" />
          </button>
          <button className="w-7 h-7 rounded-lg bg-[#e8eaff] flex items-center justify-center hover:bg-[#d8daef] transition-colors">
            <Edit className="w-4 h-4 text-[#6c78ff]" />
          </button>
        </div>
      )}
      
      {item.hasComment && (
        <div className="mt-3 pt-3 border-t border-[#f0f0f0]">
          <span className="text-[12px] font-medium text-[#111]">Comment</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Script Approvals */}
      <div>
        <h3 className="text-[16px] font-bold text-[#111] mb-4">Script Approvals</h3>
        {scriptApprovals.map((item) => (
          <TaskCard key={item.id} item={item} />
        ))}
      </div>

      {/* Content Approvals */}
      <div>
        <h3 className="text-[16px] font-bold text-[#111] mb-4">Content Approvals</h3>
        {contentApprovals.map((item) => (
          <TaskCard key={item.id} item={item} />
        ))}
      </div>

      {/* Script Revisions / Rejections */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-bold text-[#111]">Script Revisions / Rejections</h3>
          <button className="text-[12px] text-[#6c78ff] font-medium">Needs Revision</button>
        </div>
        {scriptRevisions.map((item) => (
          <TaskCard key={item.id} item={item} showButtons={!item.hasComment} />
        ))}
      </div>
    </div>
  );
}
