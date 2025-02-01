# Intermittent 500 Errors with useSWR in Next.js 15 App

This repository demonstrates a common issue encountered when using `useSWR` in a Next.js 15 application where an API route might return intermittent 500 errors. The challenge lies in gracefully handling these transient network problems to prevent a degraded user experience.

## Problem

A Next.js application uses `useSWR` to fetch data from an API route. This API route is designed to simulate random server-side failures, returning a 500 error roughly half the time.

The `useSWR` hook's error handling is insufficient to manage these temporary errors, resulting in an inconsistent user experience.  Sometimes the data loads correctly, other times a generic error message displays.

## Solution

The solution focuses on improving error handling within the `useSWR` hook and adding retry logic to handle transient network failures more effectively. This approach prevents the display of error messages for temporary server-side problems and improves overall application stability.