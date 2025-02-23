﻿using ComplaintMGT.Abstractions.Services;
using NLog;

namespace ComplaintMTG.Core.SERVICES
{
    public class LoggerService : ILoggerService
    {
        private static ILogger logger = LogManager.GetCurrentClassLogger();
        public LoggerService()
        {
        }
        public void LogDebug(string message)
        {
            logger.Debug(message);
        }

        public void LogError(string message)
        {
            logger.Error(message);
        }

        public void LogInfo(string message)
        {
            logger.Info(message);
        }

        public void LogWarn(string message)
        {
            logger.Warn(message);
        }
        public void LogTrace(string message)
        {
            logger.Trace(message);
        }
    }
}
