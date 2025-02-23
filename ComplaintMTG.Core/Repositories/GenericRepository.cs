﻿using ComplaintMGT.Abstractions.DomainModels;
using ComplaintMGT.Abstractions.Repositories;
using ComplaintMGT.Infrastructure.Data;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComplaintMTG.Core.REPOSITORY
{
    public class GenericRepository<T> : IRepository<T> where T : class
    {

        CMGTContext context;
        private DbSet<T> entities;
        private DatabaseOptions _options;
        static string connectionString = string.Empty;
        static string belconnectionString = string.Empty;
        public GenericRepository(CMGTContext context, DatabaseOptions databaseOptions)
        {
            this.context = context;
            entities = context.Set<T>();
            _options = databaseOptions;
            connectionString = _options.ConnectionString;
            belconnectionString = _options.ConnectionString;
        }

        #region Core 
        /// <summary>
        /// Core operation
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public async Task<T> Add(T entity)
        {
            await context.Set<T>().AddAsync(entity);
            //context.Set<T>().Add(entity);
            await context.SaveChangesAsync();
            return entity;
        }

        public async Task<T> Delete(int id)
        {
            var entity = await context.Set<T>().FindAsync(id);
            if (entity == null)
            {
                return entity;
            }

            context.Set<T>().Remove(entity);
            await context.SaveChangesAsync();

            return entity;


        }


        public async Task<T> GetById(int id)
        {
            return await context.Set<T>().FindAsync(id);

        }

        public async Task<List<T>> GetAllRow()
        {
            return await context.Set<T>().ToListAsync();

        }
        public IQueryable<T> GetAll()
        {
            return context.Set<T>().AsNoTracking();
        }

        public bool IsExist(Func<T, bool> predicate)
        {
            return context.Set<T>().Any(predicate);
        }
        public T GetDataSingle(Func<T, bool> predicate)
        {
            return context.Set<T>().Where(predicate).FirstOrDefault();
        }
        public async Task<T> Update(T t, object key)
        {
            if (t == null)
                return null;
            T exist = await context.Set<T>().FindAsync(key);
            if (exist != null)
            {
                context.Entry(exist).CurrentValues.SetValues(t);
                await context.SaveChangesAsync();
            }
            return exist;
        }

        #endregion


        #region Ado
        /// <summary>
        /// Get Data From Database
        /// <para>Use it when to retive data through a stored procedure</para>
        /// </summary>
        [Obsolete]
        public List<T> ExecuteQuery(string sqlQuery, object[] Param)
        {
            //return null;
            string sql = string.Format(sqlQuery, Param);
            return context.Set<T>().FromSqlRaw(sql).AsEnumerable().ToList();
            //return context.Database.SqlQuery<T>(q).ToList();
            //return context.Query<T>().FromSql(string.Format(sqlQuery, Param)).ToList();

        }

        /// <summary>
        /// Get Single Data From Database
        /// <para>Use it when to retive single data through a stored procedure</para>
        /// </summary>
        [Obsolete]
        public T ExecuteQuerySingle(string spQuery, object[] parameters)
        {
            string sql = string.Format(spQuery, parameters);
            return context.Set<T>().FromSqlRaw(sql).AsEnumerable().FirstOrDefault();
            //return context.Database.SqlQuery<T>(string2).AsEnumerable().FirstOrDefault();
        }

        [Obsolete]
        public string ExecuteQuerySingleDynamic(string spQuery, object[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);

                        output = DataTableToJsonSingleObj(dt);
                        // output = DataTableToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;
        }
        
            [Obsolete]
        public string ExecuteQueryDynamicListMultiResultSet(string spQuery, object[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataSet ds = new DataSet();
                        sda.Fill(ds);

                        output = DataSetToJSONWithJSONNet(ds);
                    }

                }
            }

            return output;

        }
        [Obsolete]
        public string ExecuteQueryDynamicList(string spQuery, object[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);

                        output = DataTableToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;

        }
        [Obsolete]
        public string ExecuteQuerySingleDataTableDynamic(string spQuery, SqlParameter[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(spQuery, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    foreach (var item in parameters)
                    {
                        cmd.Parameters.Add(item);
                    }
                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);

                        output = DataTableToJsonSingleObj(dt);
                    }

                }
            }

            return output;
        }
        [Obsolete]
        public string ExecuteQuerySingleDataTableDynamicDataset(string spQuery, SqlParameter[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(spQuery, con))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    foreach (var item in parameters)
                    {
                        cmd.Parameters.Add(item);
                    }
                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataSet dt = new DataSet();
                        sda.Fill(dt);

                        output = DataSetToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;
        }
        [Obsolete]
        public string ExecuteQueryDynamicDataset(string spQuery, object[] parameters)
        {
            string output = string.Empty;

            using (SqlConnection con = new SqlConnection(connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataSet dt = new DataSet();
                        sda.Fill(dt);

                        output = DataSetToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;

        }

        /// <summary>
        /// Insert/Update/Delete Data To Database
        /// <para>Use it when to Insert/Update/Delete data through a stored procedure</para>
        /// </summary>
        public int ExecuteCommand(string spQuery, object[] parameters)
        {



            var conn = context.Database.GetDbConnection();
            conn.Open();

            var command = conn.CreateCommand();
            command.CommandText = spQuery;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandTimeout = 9000;
            command.Parameters.AddRange(parameters.ToArray());

            var result = command.ExecuteNonQuery();
            command.Dispose();
            conn.Close();
            return result;
        }
        #endregion

        #region Bel Ado

        [Obsolete]
        public string BExecuteQuerySingleDynamic(string spQuery, object[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(belconnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);

                        output = DataTableToJsonSingleObj(dt);
                        // output = DataTableToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;
        }
        [Obsolete]
        public string BExecuteQueryDynamicList(string spQuery, object[] parameters)
        {
            string output = string.Empty;
            using (SqlConnection con = new SqlConnection(belconnectionString))
            {
                using (SqlCommand cmd = new SqlCommand(string.Format(spQuery, parameters)))
                {
                    cmd.Connection = con;
                    cmd.CommandTimeout = Int32.MaxValue;
                    cmd.CommandType = CommandType.Text;

                    using (SqlDataAdapter sda = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        sda.Fill(dt);

                        output = DataTableToJSONWithJSONNet(dt);
                    }

                }
            }

            return output;

        }

        #endregion


        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public string DataTableToJsonObj(DataTable dt)
        {
            DataSet ds = new DataSet();
            ds.Merge(dt);
            StringBuilder JsonString = new StringBuilder();
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                JsonString.Append("[");
                for (int i = 0; i < ds.Tables[0].Rows.Count; i++)
                {
                    JsonString.Append("{");
                    for (int j = 0; j < ds.Tables[0].Columns.Count; j++)
                    {
                        if (j < ds.Tables[0].Columns.Count - 1)
                        {
                            JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\",");
                        }
                        else if (j == ds.Tables[0].Columns.Count - 1)
                        {
                            JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\"");
                        }
                    }
                    if (i == ds.Tables[0].Rows.Count - 1)
                    {
                        JsonString.Append("}");
                    }
                    else
                    {
                        JsonString.Append("},");
                    }
                }
                JsonString.Append("]");
                return JsonString.ToString();
            }
            else
            {
                return null;
            }
        }
        public string DataTableToJsonSingleObj(DataTable dt)
        {
            DataSet ds = new DataSet();
            ds.Merge(dt);
            StringBuilder JsonString = new StringBuilder();
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                // JsonString.Append("[");
                for (int i = 0; i < 1; i++)
                {
                    JsonString.Append("{");
                    for (int j = 0; j < ds.Tables[0].Columns.Count; j++)
                    {
                        if (j < ds.Tables[0].Columns.Count - 1)
                        {
                            JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\",");
                        }
                        else if (j == ds.Tables[0].Columns.Count - 1)
                        {
                            JsonString.Append("\"" + ds.Tables[0].Columns[j].ColumnName.ToString() + "\":" + "\"" + ds.Tables[0].Rows[i][j].ToString() + "\"");
                        }
                    }
                    if (i == ds.Tables[0].Rows.Count - 1)
                    {
                        JsonString.Append("}");
                    }
                    else
                    {
                        JsonString.Append("}");
                    }
                }
                //JsonString.Append("]");
                return JsonString.ToString();
            }
            else
            {
                return null;
            }
        }
        public string DataTableToJSONWithJSONNet(DataTable table)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
        public string DataSetToJSONWithJSONNet(DataTable table)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
        public string DataSetToJSONWithJSONNet(DataSet ds)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(ds);
            return JSONString;
        }
    }
}
