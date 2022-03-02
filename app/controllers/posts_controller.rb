class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def show
        post = Post.find_by(id:params[:id])
        if post
            render json: post
        else
            render json: {"error": "Post not found"}, status: :not_found
        end
    end

    def create
        new_post = Post.new(post_params)
        if new_post.save
            render json: new_post, status: :created
        else
            render json: {"error": new_post.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        post = Post.find_by(id:params[:id])
        if post
            post.destroy
            head :no_content
        else
            render json: {"error": "Post not found"}, status: :not_found
        end
    end

    private

    def post_params
        params.permit(:title, :category, :content)
    end

end
