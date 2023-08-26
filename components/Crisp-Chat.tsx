'use client';

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('1f537da0-dfe6-4e4f-bed6-d69c30be0ccd')
  }, []);

  return null
}