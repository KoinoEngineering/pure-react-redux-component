class Api::V1::ArticlesController < ApplicationController
    def index
        render json: { status:Constants::SUCCESS, data: Article.all }
    end

    def create
        @article = Article.new(article_params)
        if @article.save
            render json: { status:Constants::SUCCESS, data: [ @article ] }
        else
            render json: { status:Constants::FAILED }
        end
    end

    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            render json: { status:Constants::SUCCESS, data: [ @article ] }
        else
            render json: { status:Constants::FAILED, data: [ @article ] }
        end
    end

    def destroy
        @article = Article.find(params[:id])
        @article.destroy
        render json: { status:Constants::SUCCESS, data: [ @article ] }
    end

    private
        def article_params
            params.require(:article).permit(:title, :body)
        end
end
