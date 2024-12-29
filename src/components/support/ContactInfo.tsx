import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center text-gray-700">
        <Phone className="h-4 w-4 mr-2" />
        <span className="text-sm">1-800-SHOP-HUB</span>
      </div>
      <div className="flex items-center text-gray-700">
        <Clock className="h-4 w-4 mr-2" />
        <span className="text-sm">24/7 Support</span>
      </div>
      <div className="flex items-center text-gray-700">
        <Mail className="h-4 w-4 mr-2" />
        <span className="text-sm">support@shophub.com</span>
      </div>
    </div>
  );
}