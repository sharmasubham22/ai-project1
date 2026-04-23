"use client";

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertCircle } from 'lucide-react';
import { PricingTable } from '@clerk/nextjs';

const UpgradeModal = ({open, onOpenChange, reason}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-[#8CD4CB]/10 min-w-[70vw] max-h-[90vh] overflow-y-scroll">
        <DialogHeader>
          <div className="flex items-start gap-2 mb-2">
            <AlertCircle className="text-[#8CD4CB] ml-2 mt-1" />
            <div>
              <DialogTitle className="font-serif text-2xl">
                Upgrade your plan
              </DialogTitle>
              {reason && (
                <DialogDescription className="text-[#8CD4CB] mt-1">
                  {reason}
                </DialogDescription>
              )}
            </div>
          </div>
        </DialogHeader>
        <div className="px-2 pb-6">
          <PricingTable
            checkoutProps={{
              appearance: {
                elements: {
                  drawerRoot: {
                    zIndex: 2000,
                  },
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default UpgradeModal
