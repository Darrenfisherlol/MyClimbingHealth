import React from 'react';
import { Link } from 'react-router';

interface ActionCardProps {
  action: string;
  link: string;
  description?: string;
}
export default function ActionCard({action, link, description}: ActionCardProps) {
  return(
    <div className="p-8 border rounded-lg shadow-md">
      <Link to={link} className="text-blue-500">{action}</Link>
      <p>{description}</p>
    </div>
  );
}
