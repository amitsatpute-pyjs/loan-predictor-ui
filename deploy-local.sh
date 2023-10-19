#!/bin/bash
kubectl config use-context k3d-loan-predictor-local 
docker  build --no-cache -t ui:latest -f docker/loan-predictor-ui.Dockerfile .
k3d image import --cluster loan-predictor-local ui:latest
kubectl rollout restart deployment ui-deployment -n default