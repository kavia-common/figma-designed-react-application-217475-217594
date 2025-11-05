#!/bin/bash
cd /home/kavia/workspace/code-generation/figma-designed-react-application-217475-217594/web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

