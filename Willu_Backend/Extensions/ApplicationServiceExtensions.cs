using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Willu_Backend.Data;
using Willu_Backend.Interfaces;
using Willu_Backend.Services;

namespace Willu_Backend.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            
            services.AddSwaggerDocument();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Willu Backend API",
                    Version = "v1",
                    Description = "API for Willu application"
                });
            });

            services.AddScoped<ITokenService, TokenService>();
            return services;
        }
    }
}
