/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WishtlistController } from './../controller/wishlistController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controller/userController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TmdbController } from './../controller/tmdbController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { healthController } from './../controller/healthController';
import { iocContainer } from './../config/ioc/iocContainer';
import type { IocContainer, IocContainerFactory } from '@tsoa/runtime';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsWishtlistController_fetchSimilarMovies: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/db/checkWishlist',
            ...(fetchMiddlewares<RequestHandler>(WishtlistController)),
            ...(fetchMiddlewares<RequestHandler>(WishtlistController.prototype.fetchSimilarMovies)),

            async function WishtlistController_fetchSimilarMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWishtlistController_fetchSimilarMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<WishtlistController>(WishtlistController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchSimilarMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWishtlistController_getWishlist: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/db/getWishlist',
            ...(fetchMiddlewares<RequestHandler>(WishtlistController)),
            ...(fetchMiddlewares<RequestHandler>(WishtlistController.prototype.getWishlist)),

            async function WishtlistController_getWishlist(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWishtlistController_getWishlist, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<WishtlistController>(WishtlistController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'getWishlist',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWishtlistController_addUserWishlist: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/db/addUserWishlist',
            ...(fetchMiddlewares<RequestHandler>(WishtlistController)),
            ...(fetchMiddlewares<RequestHandler>(WishtlistController.prototype.addUserWishlist)),

            async function WishtlistController_addUserWishlist(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWishtlistController_addUserWishlist, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<WishtlistController>(WishtlistController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'addUserWishlist',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsWishtlistController_removeUserWishlist: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.delete('/db/removeUserWishlist',
            ...(fetchMiddlewares<RequestHandler>(WishtlistController)),
            ...(fetchMiddlewares<RequestHandler>(WishtlistController.prototype.removeUserWishlist)),

            async function WishtlistController_removeUserWishlist(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsWishtlistController_removeUserWishlist, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<WishtlistController>(WishtlistController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'removeUserWishlist',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_fetchSimilarMovies: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/db/login',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.fetchSimilarMovies)),

            async function UserController_fetchSimilarMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_fetchSimilarMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<UserController>(UserController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchSimilarMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserController_register: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.post('/db/register',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.register)),

            async function UserController_register(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_register, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<UserController>(UserController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchGenerList: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tmdb/fetchGenerList',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchGenerList)),

            async function TmdbController_fetchGenerList(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchGenerList, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchGenerList',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchNowPlayingMovies: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tmdb/fetchNowPlayingMovies',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchNowPlayingMovies)),

            async function TmdbController_fetchNowPlayingMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchNowPlayingMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchNowPlayingMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchPopularMovies: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tmdb/fetchPopularMovies',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchPopularMovies)),

            async function TmdbController_fetchPopularMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchPopularMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchPopularMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchUpcomingMovies: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/tmdb/fetchUpcomingMovies',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchUpcomingMovies)),

            async function TmdbController_fetchUpcomingMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchUpcomingMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchUpcomingMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchMovieCast: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchMovieCast',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchMovieCast)),

            async function TmdbController_fetchMovieCast(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchMovieCast, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchMovieCast',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchMovieDetail: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchMovieDetail',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchMovieDetail)),

            async function TmdbController_fetchMovieDetail(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchMovieDetail, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchMovieDetail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchMoviesByGenres: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchMoviesByGenres',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchMoviesByGenres)),

            async function TmdbController_fetchMoviesByGenres(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchMoviesByGenres, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchMoviesByGenres',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchMovieVideo: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchMovieVideo',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchMovieVideo)),

            async function TmdbController_fetchMovieVideo(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchMovieVideo, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchMovieVideo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchSearchMovies: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchSearchMovies',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchSearchMovies)),

            async function TmdbController_fetchSearchMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchSearchMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchSearchMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsTmdbController_fetchSimilarMovies: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
        };
        app.put('/tmdb/fetchSimilarMovies',
            ...(fetchMiddlewares<RequestHandler>(TmdbController)),
            ...(fetchMiddlewares<RequestHandler>(TmdbController.prototype.fetchSimilarMovies)),

            async function TmdbController_fetchSimilarMovies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsTmdbController_fetchSimilarMovies, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<TmdbController>(TmdbController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'fetchSimilarMovies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argshealthController_checkHealth: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/db/health',
            ...(fetchMiddlewares<RequestHandler>(healthController)),
            ...(fetchMiddlewares<RequestHandler>(healthController.prototype.checkHealth)),

            async function healthController_checkHealth(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argshealthController_checkHealth, request, response });

                const container: IocContainer = typeof iocContainer === 'function' ? (iocContainer as IocContainerFactory)(request) : iocContainer;

                const controller: any = await container.get<healthController>(healthController);
                if (typeof controller['setStatus'] === 'function') {
                controller.setStatus(undefined);
                }

              await templateService.apiHandler({
                methodName: 'checkHealth',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
